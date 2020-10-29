const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1: load entire file into memory into memory, because only after that's ready,
  //it can then send that data.
  // fs.readFile("./test-file.txt", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.end(data);
  //   }
  // });

  //Solution2: Streams
  // We're effectively streaming the file, so we read one piece
  //of the file, and as soon as that's available,
  //we send it right to the client, using the write method
  //of the respond stream. Then when the next piece is available
  // then that piece will be sent, and all the way until
  //the entire file is read and streamed to the client.
  // const readable = fs.createReadStream("./test-file.txt");
  // readable.on("data", (chunk) => {
  //   //put chunk data from readable stream into
  //   //writable stream, which is the response.
  //   //response is a writeable stream
  //   res.write(chunk);
  // });

  // //handle the event when all the data is read,
  // // So when the stream is basically finished reading the data
  // readable.on("end", () => {
  //   // the response is also a stream, and the end method
  //   //signals that no more data will be written to this writable stream, data has been sent by chunk
  //   //otherwise,the response will actually never really be sent to the client.
  //   res.end();
  // });

  // readable.on("error", (err) => {
  //   res.statusCode = 500;
  //   res.end("File not found");
  //   console.log(err);
  // });

  //solution 3
  const readable = fs.createReadStream("./test-file.txt");
  // use the pipe method on it, and then put in a writable stream
  //readableSource.pipe(writeableDest)
  //writeableDest can be a duplex or a transform stream
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("start listening");
});
