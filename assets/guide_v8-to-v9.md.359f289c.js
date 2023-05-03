import{_ as e,o,c,V as d}from"./chunks/framework.966e8369.js";const m=JSON.parse('{"title":"🛠️ 从 V8 到 V9","description":"","frontmatter":{},"headers":[],"relativePath":"guide/v8-to-v9.md","filePath":"guide/v8-to-v9.md","lastUpdated":1683138638000}'),a={name:"guide/v8-to-v9.md"},i=d('<h1 id="🛠️-从-v8-到-v9" tabindex="-1">🛠️ 从 V8 到 V9 <a class="header-anchor" href="#🛠️-从-v8-到-v9" aria-label="Permalink to &quot;🛠️ 从 V8 到 V9&quot;">​</a></h1><p>本文档将帮助你从 klinecharts 8.x 版本升级到 klinecharts 9.x 版本，如果你是 7.x 或者更老的版本，请先参考之前的升级文档升级到 8.x。</p><h2 id="引入调整" tabindex="-1">引入调整 <a class="header-anchor" href="#引入调整" aria-label="Permalink to &quot;引入调整&quot;">​</a></h2><p>不再区分<code>klinecharts/index.blank</code>和<code>klinecharts/index.simple</code>，请统一使用<code>import { ... } from &#39;klinecharts&#39;</code>。</p><h2 id="设计调整" tabindex="-1">设计调整 <a class="header-anchor" href="#设计调整" aria-label="Permalink to &quot;设计调整&quot;">​</a></h2><p><code>shape</code>，<code>annotation</code>，<code>tag</code>合并成<code>overlay</code>，详情请查阅<a href="./overlay.html">覆盖物</a>。</p><h2 id="样式配置调整" tabindex="-1">样式配置调整 <a class="header-anchor" href="#样式配置调整" aria-label="Permalink to &quot;样式配置调整&quot;">​</a></h2><ul><li>所有线的样式选项<code>dash</code>，更改为<code>dashed</code>，<code>dashValue</code>更改为<code>dashedValue</code>。</li><li><code>candle.tooltip.labels</code>和<code>candle.tooltip.values</code>，合并为<code>candle.tooltip.custom</code>。</li><li><code>xAxis.height</code>变更为<code>xAxis.size</code>，<code>xAxis.tickText.paddingTop</code>变更为<code>xAxis.tickText.marginStart</code>，<code>xAxis.tickText.paddingBottom</code>变更为<code>xAxis.tickText.marginEnd</code>。</li><li><code>yAxis.height</code>变更为<code>yAxis.size</code>，<code>yAxis.tickText.paddingTop</code>变更为<code>yAxis.tickText.marginStart</code>，<code>yAxis.tickText.paddingBottom</code>变更为<code>yAxis.tickText.marginEnd</code>。</li><li><code>technicalIndicator.bar</code>变更为<code>indicator.bars</code>，<code>technicalIndicator.line</code>变更为<code>indicator.lines</code>，<code>technicalIndicator.circle</code>变更为<code>indicator.circles</code>。</li><li>删除<code>shape</code>，<code>annotation</code>，<code>tag</code>，请用<code>overlay</code>代替。</li></ul><h2 id="api调整" tabindex="-1">API调整 <a class="header-anchor" href="#api调整" aria-label="Permalink to &quot;API调整&quot;">​</a></h2><h3 id="图表api" tabindex="-1">图表API <a class="header-anchor" href="#图表api" aria-label="Permalink to &quot;图表API&quot;">​</a></h3><ul><li><code>extension.addTechnicalIndicatorTemplate(template)</code>变更为<code>registerIndicator(template)</code>。</li><li>删除<code>extension.addShapeTemplate(template)</code>，请用<code>registerOverlay(template)</code>代替。</li></ul><h3 id="实例api" tabindex="-1">实例API <a class="header-anchor" href="#实例api" aria-label="Permalink to &quot;实例API&quot;">​</a></h3><ul><li><code>getDom({ paneId, position })</code>变更为<code>getDom(paneId, position)</code>，参数<code>position</code>选项变更为<code>root</code>，<code>main</code>和<code>yAxis</code>。</li><li><code>getWidth()</code>和<code>getHeight()</code>合并成一个方法<code>getSize(paneId, position)</code>。</li><li><code>setStyleOptions(styles)</code>变更为<code>setStyles(styles)</code>。</li><li><code>getStyleOptions()</code>变更为<code>getStyles()</code>。</li><li><code>setOffsetRightSpace(space)</code>变更为<code>setOffsetRightDistance(distance)</code></li><li><code>createTechnicalIndicator(value, isStack, paneOptions)</code>变更为<code>createIndicator(value, isStack, paneOptions)</code></li><li><code>overrideTechnicalIndicator(override, paneId)</code>变更为<code>overrideIndicator(override, paneId)</code>。</li><li><code>getTechnicalIndicatorByPaneId(paneId, name)</code>变更为<code>getIndicatorByPaneId(paneId, name)</code>。</li><li><code>removeTechnicalIndicator(paneId, name)</code>变更为<code>removeIndicator(paneId, name)</code>。</li><li><code>subscribeAction(type, callback)</code>和<code>unsubscribeAction(type, callback)</code>，参数<code>type</code>选项变更为<code>onZoom</code>，<code>onScroll</code>，<code>onCrosshairChange</code>，<code>onVisibleRangeChange</code>和<code>onPaneDrag</code>。</li><li><code>convertToPixel(value, finder)</code>和<code>convertFromPixel(coordinate, finder)</code>，参数<code>finder.absoluteYAxis</code>变更为<code>finder.absolute</code>。</li><li>删除<code>createShape(value, paneId)</code>，<code>createAnnotation(annotation, paneId)</code>，<code>createTag(tag, paneId)</code>，请用<code>createOverlay(value, paneId)</code>代替。</li><li>删除<code>removeShape(id)</code>，<code>removeAnnotation(paneId, points)</code>，<code>removeTag(paneId, tagId)</code>，请用<code>removeOverlay(id)</code>代替。</li><li>删除<code>setShapeOptions(options)</code>，请用<code>overrideOverlay(override)</code>代替。</li><li>删除<code>createHtml(html, paneId)</code>，<code>removeHtml(paneId, htmlId)</code>，请通过<code>getDom(paneId, position)</code>获取到对应的dom后操作。</li><li>删除<code>getTechnicalIndicatorByPaneId(paneId, name)</code>。</li></ul><h3 id="图形辅助api" tabindex="-1">图形辅助API <a class="header-anchor" href="#图形辅助api" aria-label="Permalink to &quot;图形辅助API&quot;">​</a></h3><ul><li>所有的API都迁移至<code>klinecharts.utils</code>。</li></ul><h2 id="自定义技术指标调整" tabindex="-1">自定义技术指标调整 <a class="header-anchor" href="#自定义技术指标调整" aria-label="Permalink to &quot;自定义技术指标调整&quot;">​</a></h2><ul><li>属性<code>plots</code>变更为<code>figures</code>，子项方法<code>color</code>，<code>isStroke</code>，<code>isDashed</code>合并成<code>styles</code>。</li><li>方法<code>regeneratePlots(params)</code>变更为<code>regeneratefigures(params)</code>。</li><li>方法<code>calcTechnicalIndicator(kLineDataList, options)</code>变更为<code>calc(kLineDataList, indicator)</code>。</li><li>方法<code>createTooltipDataSource({ dataSource, viewport, crosshair, technicalIndicator, xAxis,yAxis, defaultStyles })</code>变更为<code>createTooltipDataSource({ kLineDataList, indicator, visibleRange, bounding, crosshair, defaultStyles, xAxis, yAxis })</code>，返回值由<code>[{ title: &#39;xxx&#39;, value: &#39;xxx&#39;, color: &#39;xxx&#39; }, ...]</code>变更为<code>{ name: &#39;xxx&#39;, calcParamsText: &#39;xxx&#39;, values: [{ title: &#39;xxx&#39;, value: &#39;xxx&#39;, color: &#39;xxx&#39; }, ...] }</code>。</li><li>方法<code>render({ ctx, dataSource, viewport, styles,xAxis, yAxis })</code>变更为<code>draw({ ctx, kLineDataList, indicator, visibleRange, bounding, barSpace, defaultStyles, xAxis, yAxis })</code>。</li><li>删除属性<code>shouldCheckParamCount</code>。</li></ul>',17),t=[i];function l(n,r,s,h,p,x){return o(),c("div",null,t)}const I=e(a,[["render",l]]);export{m as __pageData,I as default};
