var sowb=window.sowb||{};jQuery(function(a){sowb.setupTabs=function(){a(".sow-tabs").each(function(s,t){var o=a(t),n=o.closest(".so-widget-sow-tabs"),e=n.data("useAnchorTags"),i=o.find("> .sow-tabs-panel-container"),w=o.find("> .sow-tabs-tab-container > .sow-tabs-tab"),c=o.find(".sow-tabs-tab-selected"),d=c.index(),b=i.find("> .sow-tabs-panel");b.not(":eq("+d+")").hide();var r=function(s,t){var o=a(s);if(o.is(".sow-tabs-tab-selected"))return!0;var n=o.index();if(n>-1){var i=w.filter(".sow-tabs-tab-selected");i.removeClass("sow-tabs-tab-selected");var c=i.index();b.eq(c).fadeOut("fast",function(){a(this).trigger("hide"),b.eq(n).fadeIn("fast",function(){a(this).trigger("show")})}),o.addClass("sow-tabs-tab-selected"),e&&!t&&(window.location.hash=o.data("anchor"))}};if(w.click(function(){r(this)}),e){var h=function(){if(window.location.hash){window.location.hash.replace("#","").split(",").forEach(function(a){var s=w.filter('[data-anchor="'+a+'"]');s&&r(s,!0)})}};a(window).on("hashchange",h),window.location.hash?h():window.location.hash=c.data("anchor")}})},sowb.setupTabs(),a(sowb).on("setup_widgets",sowb.setupTabs)}),window.sowb=sowb;