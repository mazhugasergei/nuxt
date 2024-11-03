<template>
  <section>
    <h2>Routing</h2>
    <Card>
      <CardHeader>
        <CardTitle>Route Validation</CardTitle>
        <CardDescription>pages/routing/[id].vue</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Validates <samp>params.id</samp> (in this case must be a string number).</p>
        <p>❌ Page <NuxtLink to="/routing/asdasdasd">/routing/asdasdasd</NuxtLink> returns 404</p>
        <p>✅ Page <NuxtLink to="/routing/123">/routing/123</NuxtLink> will be found</p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>MiddleWare</CardTitle>
        <CardDescription>
          <p>maddleware/auth.ts</p>
          <p>pages/routing/dashboard.vue</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Runs before accessing the page. The page <NuxtLink to="/routing/dashboard">/routing/dashboard</NuxtLink> will
          redirect you to <a href="/login">/login</a> page (which doesn't exist) as you're "not logged in".
        </p>
      </CardContent>
    </Card>
  </section>
</template>
