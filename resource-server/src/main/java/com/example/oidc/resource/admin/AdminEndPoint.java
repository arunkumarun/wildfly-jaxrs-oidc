package com.example.oidc.resource.admin;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/admin")
public class AdminEndPoint {
    @GET
    public String getAdminMessage() {
        return "Accessible to only Admin";
    }
}
