page.meta {
  # If the meta field description in the page properties is filled, then this will override the default.
  description.field = description
  author.field = author
  keywords.field = keywords
  viewport = width=device-width, initial-scale=1.0
  robots = INDEX,FOLLOW,NOODP
	google-site-verification.cObject = TEXT
	google-site-verification.cObject {
    value = {$meta.google-site-verification.value}
    if.isTrue = {$meta.google-site-verification.active}
  }
  X-UA-Compatible = IE=edge,chrome=1
  X-UA-Compatible.httpEquivalent = 1
  # OpenGraph Tags
  
       og:title {
            attribute = property
            field = title
        }
        og:site_name {
            attribute = property
            data = TSFE:tmpl|setup|sitetitle
        }
        og:description = {$page.meta.description}
        og:description {
            attribute = property
            field = description
        }
        og:image {
            attribute = property
            stdWrap.cObject = FILES
            stdWrap.cObject {
                references {
                    data = levelfield:-1, media, slide
                }
                maxItems = 1
                renderObj = COA
                renderObj {
                    10 = IMG_RESOURCE
                    10 {
                        file {
                            import.data = file:current:uid
                            treatIdAsReference = 1
                            width = 1280c
                            height = 720c
                        }
                        stdWrap {
                            typolink {
                                parameter.data = TSFE:lastImgResourceInfo|3
                                returnLast = url
                                forceAbsoluteUrl = 1
                            }
                        }
                    }
                }
            }
        }
	
}

[applicationContext = Development]
page.meta.robots = NOINDEX,NOFOLLOW
[global]