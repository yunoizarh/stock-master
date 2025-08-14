//realtime subscription

useEffect(() => {
  const channel = supabase
    .channel("products-changes") // name it whatever you like
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "products" },
      (payload) => {
        console.log("Change received!", payload);

        // Handle insert
        if (payload.eventType === "INSERT") {
          setProducts((prev) => [...prev, payload.new]);
        }

        // Handle update
        if (payload.eventType === "UPDATE") {
          setProducts((prev) =>
            prev.map((p) => (p.id === payload.new.id ? payload.new : p))
          );
        }

        // Handle delete
        if (payload.eventType === "DELETE") {
          setProducts((prev) => prev.filter((p) => p.id !== payload.old.id));
        }
      }
    )
    .subscribe();

  // Cleanup when component unmounts
  return () => {
    supabase.removeChannel(channel);
  };
}, []);
