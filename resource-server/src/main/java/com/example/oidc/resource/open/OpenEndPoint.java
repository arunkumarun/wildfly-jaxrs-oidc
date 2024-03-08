package com.example.oidc.resource.open;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/open")
public class OpenEndPoint {
    @GET
    public String getOpenMessage() {
        return "Open and accessible by everyone";
    }
}
