No5={};No5.Seajax={};No5.Seajax.Shapes={};No5.Seajax.Tilesource={};No5.Seajax.toImageCoordinates=function(a,b,c){a=No5.Seajax.Dimension(a);return new Seadragon.Point(b*a,c*a)};No5.Seajax.toWorldCoordinates=function(a,b,c){a=No5.Seajax.Dimension(a);return new Seadragon.Point(b/a,c/a)};No5.Seajax.Dimension=function(a){return a.source.width>a.source.height?a.source.width:a.source.height};No5.Seajax.Shapes.Marker=function(a){this.img=document.createElement("img");this.img.src=a};No5.Seajax.Shapes.Marker.prototype.attachTo=function(a,b,c){b=No5.Seajax.toWorldCoordinates(a,b,c);a.drawer.addOverlay(this.img,b,Seadragon.OverlayPlacement.BOTTOM)};No5.Seajax.Shapes.Marker.prototype.addEventListener=function(a,b){Seadragon.Utils.addEvent(this.img,a,Seadragon.Utils.stopEvent);this.img.addEventListener(a,b,!1)};No5.Seajax.Shapes.Ellipse=function(a,b){this.width=a;this.height=b;this.div=document.createElement("div");var c=Raphael(this.div,a,b),d=viewer.viewport.getMaxZoom();this.ellipse=c.ellipse(a/(2*d),b/(2*d),a/(2*d),b/(2*d));this.ellipse.node.style.cursor="pointer"};
No5.Seajax.Shapes.Ellipse.prototype.attachTo=function(a,b,c){b=No5.Seajax.toWorldCoordinates(a,b,c);c=No5.Seajax.toWorldCoordinates(a,this.width,this.height);a.drawer.addOverlay(this.div,new Seadragon.Rect(b.x,b.y,c.x,c.y));var d=this.ellipse;a.addEventListener("animation",function(){var b=a.viewport.getZoom(!0);d.scale(b,b,0,0)})};No5.Seajax.Shapes.Ellipse.prototype.getElement=function(){return this.ellipse};
No5.Seajax.Shapes.Ellipse.prototype.redraw=function(a){a=a.viewport.getZoom(!0);this.ellipse.scale(a,a,0,0)};No5.Seajax.Shapes.Ellipse.prototype.addEventListener=function(a,b){Seadragon.Utils.addEvent(this.div,a,Seadragon.Utils.stopEvent);this.img.addEventListener(a,b,!1)};No5.Seajax.Shapes.Polygon=function(a){for(var b=a[0].x,c=b,d=a[0].y,f=d,e=1,g=a.length;e<g;++e){if(a[e].x<b)b=a[e].x;if(a[e].x>c)c=a[e].x;if(a[e].y<d)d=a[e].y;if(a[e].y>f)f=a[e].y}this.origin=new Seadragon.Point(b,d);this.width=c-b;this.height=f-d;c=viewer.viewport.getMaxZoom();this.normWidth=2*this.width/c;this.normHeight=2*this.height/c;this.div=document.createElement("div");this.paper=Raphael(this.div);for(var f=2*(a[0].x-b)/c+" "+2*(a[0].y-d)/c,h="M"+f,e=1,g=a.length;e<g;++e)h+="L"+2*(a[e].x-
b)/c+" "+2*(a[e].y-d)/c;h+="L"+f;this.path=this.paper.path(h);this.paper.setSize(this.normWidth,this.normHeight)};No5.Seajax.Shapes.Polygon.prototype.attachTo=function(a){var b=No5.Seajax.toWorldCoordinates(a,this.origin.x,this.origin.y);a.drawer.addOverlay(this.div,new Seadragon.Rect(b.x,b.y,0,0));var c=this.paper,d=this.path,f=this.normWidth,e=this.normHeight;a.addEventListener("animation",function(){var b=a.viewport.getZoom(!0);c.setSize(f*b,e*b);d.scale(b,b,0,0)})};
No5.Seajax.Shapes.Polygon.prototype.getElement=function(){return this.path};No5.Seajax.Shapes.Polygon.prototype.redraw=function(a){a=a.viewport.getZoom(!0);this.paper.setSize(this.normWidth*a,this.normHeight*a);this.path.scale(a,a,0,0)};No5.Seajax.Shapes.Polygon.prototype.addEventListener=function(a,b){Seadragon.Utils.addEvent(this.div,a,Seadragon.Utils.stopEvent);this.div.addEventListener(a,b,!1)};No5.Seajax.Tilesource.OSM=function(){var a=new Seadragon.TileSource(65572864,65572864,256,0);a.getTileUrl=function(a,c,d){return"http://tile.openstreetmap.org/"+(a-8)+"/"+c+"/"+d+".png"};return a};No5.Seajax.Tilesource.OSM=function(a,b,c,d){d||(d="jpg");b=new Seadragon.TileSource(b,c,256,0);b.getTileUrl=function(b,c,g){return a+b+"/"+c+"/"+g+"."+d};return b};
