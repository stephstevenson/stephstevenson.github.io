---
layout: page
permalink: /archive/
title: archive
description: Showcase your writing, short stories, or posts. Replace this text with your description.
key: 3
---

<ul class="post-list">
{% for poem in site.archive reversed %}
    <li>
        <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
        <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>
