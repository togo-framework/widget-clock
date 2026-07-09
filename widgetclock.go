// Package widgetclock is the "Clock" DRIVER — A live ticking clock (date + time).
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-clock"
package widgetclock

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "clock",
		Title:       "Clock",
		DefaultZone: "sidebar",
		Asset:       "/widgets/clock.js",
	})
}
