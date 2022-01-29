import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: 'ubzgndih',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk0ktUXypUVpqKULnAcKSaAxtsYwV7nM0aJJF5yFUdpP6aKZk4zFLBJbi6NzzUEUWGKNP9bQajFNlZsWBSFzMfzJubIvJesoDfRxt5O0smC7zt0iZGQSUvKLAyYECtMe3B9HcjD5Je21Bjmmi6k4sVXIqNGvOBqn6s9Eqtp8tgSN8nkuXgbc',
    useCdn: false
})