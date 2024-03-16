package com.example.oidc.resource.admin;

import jakarta.enterprise.context.RequestScoped;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Context;

@RequestScoped
@Path("/admin")
public class AdminEndPoint {
    @GET
    public String getAdminMessage(@Context HttpServletRequest request) {
        return "Accessible to only Admin: " + request.getUserPrincipal();
    }
}
