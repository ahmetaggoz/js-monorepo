#!/bin/bash

while read repo; do
  name=$(basename "$repo" .git)
  git subtree add --prefix="$name" "$repo" main --squash
done < repo.txt
