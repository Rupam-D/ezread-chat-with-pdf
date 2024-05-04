//2. split and segment the pdf
const document = await Promise.all(pages.map(prepareDocument));

    // 3. vectorize and embedded document
    const vectors = (await Promise.all(
      document.flat().map(embeddedDocs)
    )) as PineconeRecord[];

    // 4. store to pinecone
    try {
      const index = pc.index("chat-with-pdf-ezread");
      console.log("inserting pc started");
      vectors &&
        (await index.namespace(convertToAscii(fileKey)).upsert(vectors));
      console.log("insertn pc end");
    } catch (error) {
      console.log(error);
      throw new Error("Error in inseting Pincone");
    }
