---
layout: default
permalink: /supported-by
---

Cloud Foundry is graciously supported by the contributions of 

{% assign cols = site.data.event.supporters.size %}

{% if cols > 3%}
    {% assign div_size = 4 %}
{% else %}
    {% assign div_size = 12 | divided_by: cols | ceil %}
{% endif %}

{% assign rows = cols | divided_by: 3 | ceil | plus: 1 %}

{% for row in (1..rows) %}
<div class="row">
<!-- loop over supporters -->
{% assign start = row |  minus: 1 | times: 3 %}
{% assign end = start | plus:  3 %}
    {% for col in (start..end) %}
    <div class="col col-md-{{ div_size }}">
    <h2>{{ site.data.event.supporters[col].name}}</h2>
    <img src="{{site.url}}/assets/img/{{site.data.event.supporters[col].logo}}" class="rounded mx-auto d-block timeline-image img-fluid " style="max-width: auto; max-height: 100px;" alt="{{ site.data.event.supporters[col].description}}">
    <p>{{ site.data.event.supporters[col].description}}</p>
    </div>
    {% endfor %}
</div>
{% endfor %}