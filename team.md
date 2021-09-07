---
layout: gold
permalink: /team/
title: The Steppe Gold Team
id: team
image: /images/backgrounds/landscape_mound.jpg
parallax: /images/backgrounds/excavated.jpg
---
<div class="container mb-3">
  <h2 class="text-info display-5">Core team</h2>
</div>

<div class="container mb-3">
{% assign rows = site.team.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
  {% assign sorted = site.team | sort:"order" %}
  {% for author in sorted limit:2 offset:offset %}
     <div class="col-md-6 mt-3">
          <div class="card h-100">
              <div class="card-body">
                        <h3><a href="{{ author.url }}">{{author.title}}</a></h3>
                                    {% if author.job-title %}
                                    <h6 class="text-muted">{{ author.job-title}} </h6>
                                    {% endif %}

                <p class="text-info">{{ author.content | strip_html | truncatewords: 20}}</p>
              </div>
          </div>
    </div>
    {% endfor %}
  </div>
{% endfor %}
</div>
{% capture contributors %}
## Contributors
{: .text-info .display-5 .mt-3}

{::options parse_block_html="true" /}
<div class="col-12 shadow-sm p-3 mx-auto mb-3 mt-3 ">

[Joanna Dobson](https://altaipilgrim.com/en/)
[Professor Emerita Claudia Chang](https://isaw.nyu.edu/people/affiliates/research-associates/claudia-chang), Sweet Briar College  
[Professor Laerke Recht](https://spiritedhorse.wordpress.com/about/)  
[Prof Peter Stewart](https://www.arch.ox.ac.uk/people/stewart-peter), Oxford University  
[Professor Tim Williams](International Centre for Silk Roads Archaeology & Heritage, Central Asian Archaeological Landscape (CAAL)), University College London  
[Dr Gai Jorayev](https://www.ucl.ac.uk/archaeology/people/gai-jorayev), University College London  
[Dr Prajakti Kalra](https://www.devstudies.cam.ac.uk/ourpeople/PrajaktiKalra), University of Cambridge  
[Dr Miljana Radivojevic](https://www.ucl.ac.uk/archaeology/people/miljana-radivojevic-lecturer-archaeomaterials), University College London

</div>
{% endcapture %}
