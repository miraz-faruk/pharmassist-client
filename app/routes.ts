import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // Main Layout and Public Routes
    layout("./layouts/MainLayout.tsx", [
        index("./routes/home.tsx"),
        route("about", "./routes/about.tsx"),
    ])
] satisfies RouteConfig;
