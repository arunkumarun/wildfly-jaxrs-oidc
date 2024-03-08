package com.example.oidc.resource.admin;

import jakarta.enterprise.context.RequestScoped;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@RequestScoped
@Path("/admin")
public class AdminEndPoint {
    @GET
    public String getAdminMessage() {
        return "Accessible to only Admin";
    }
}
