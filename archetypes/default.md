---
# English name in lowercase
translationKey: '{{ lower .File.ContentBaseName }}'

# ========================================================
# Search engine / page tab title
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'

# Search engine description (1 - 2 sentences)
description: ''

# ========================================================
# Page content - Uncomment tabs only if using multiple infoboxes
infoboxes:
  - title: '{{ title .File.ContentBaseName }}'
    #tab: ''
    data:
      - label: ''
        value: 
      - label: ''
        value: 

# ========================================================
# Content organization - Useful values for page sorting
# Imagine ways that you'd want to sort/filter things in the game
categories:
tags:

# Generic example
# categories:
# - Boss drops
# - Projectile weapons
# tags
# - Fire
# - Physical

# ========================================================
# Configuration - defaults to false if left commented
# renderMath: true
---
