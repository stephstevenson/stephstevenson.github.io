---
layout: page
title: blog
permalink: /blog/
key: 4
---

{% include title.html %}

{% for post in site.blog %}

{% if post.redirect %}
<div class="img-post">
    <div class="thumbnail">
        <a href="{{ post.redirect }}" target="_blank">
        {% if post.img %}
        <img class="thumbnail" src="{{ post.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ post.title }}</h1>
            <br/>
            <p>{{ post.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="img-post">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ post.url }}">
        {% if post.img %}
        <img class="thumbnail" src="{{ post.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ post.title }}</h1>
            <br/>
            <p>{{ post.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
