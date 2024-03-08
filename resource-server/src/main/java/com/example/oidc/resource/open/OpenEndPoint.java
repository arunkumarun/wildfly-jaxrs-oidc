package com.example.oidc.resource.open;

import jakarta.enterprise.context.RequestScoped;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@RequestScoped
@Path("/open")
public class OpenEndPoint {
    @GET
    public String getOpenMessage() {
        return "Open and accessible by everyone";
    }
}
