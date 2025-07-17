#!/bin/bash

REPOLIST="../eksik-repolar.txt"

while IFS= read -r repo_url_raw; do
  repo_url=$(echo "$repo_url_raw" | tr -d '\r' | xargs)

  repo_name=$(basename -s .git "$repo_url")

  echo "🌲 Subtree ekleniyor: $repo_name"

  git remote add "$repo_name" "$repo_url"

  if git fetch "$repo_name"; then
    if git ls-remote --heads "$repo_url" main | grep main; then
      BRANCH="main"
    elif git ls-remote --heads "$repo_url" master | grep master; then
      BRANCH="master"
    else
      echo "⚠️ $repo_name için main veya master dalı bulunamadı. Atlanıyor."
      git remote remove "$repo_name"
      continue
    fi

    git subtree add --prefix="$repo_name" "$repo_name"/"$BRANCH" --squash
  else
    echo "❌ $repo_name fetch edilemedi!"
  fi

  git remote remove "$repo_name"
done < "$REPOLIST"

echo "✅ Eksik repolar eklenmeye çalışıldı."

