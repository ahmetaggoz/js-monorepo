#!/bin/bash

REPOLIST="../repo.txt"  # repo.txt js-monorepo'nun bir üst dizininde olmalı

while IFS= read -r repo_url; do
  repo_name=$(basename -s .git "$repo_url")  # klasör ismi

  echo "🌲 Subtree ekleniyor: $repo_name"

  git remote add "$repo_name" "$repo_url"
  git fetch "$repo_name"

  git subtree add --prefix="$repo_name" "$repo_name"/main --squash

  git remote remove "$repo_name"
done < "$REPOLIST"

echo "✅ Tüm repolar subtree olarak eklendi."
