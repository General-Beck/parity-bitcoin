initSidebarItems({"struct":[["Buffer","Sink for the `Sink::buffer` combinator, which buffers up to some fixed number of values when the underlying sink is unable to accept them."],["Flush","Future for the `Sink::flush` combinator, which polls the sink until all data has been flushed."],["Send","Future for the `Sink::send` combinator, which sends a value to a sink and then waits until the sink has fully flushed."],["SendAll","Future for the `Sink::send_all` combinator, which sends a stream of values to a sink and then waits until the sink has fully flushed those values."],["SinkFromErr","A sink combinator to change the error type of a sink."],["SinkMapErr","Sink for the `Sink::sink_map_err` combinator."],["Wait","A sink combinator which converts an asynchronous sink to a **blocking sink**."],["With","Sink for the `Sink::with` combinator, chaining a computation to run *prior* to pushing a value into the underlying sink."]],"trait":[["Sink","A `Sink` is a value into which other values can be sent, asynchronously."]],"type":[["BoxSink","A type alias for `Box<Stream + Send>`"]]});