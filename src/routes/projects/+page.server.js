import { GITHUB_TOKEN } from '$env/static/private';

const query = `{ 
    user (login: "EricWeber33") {
      repositories (last:25, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          name
          description
          url
          sshUrl
          languages (first: 5) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }`

/** @type {import('./$types').PageLoad} */
export async function load() {
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${GITHUB_TOKEN}`,
            "Content-type": "application/json",
        },
        body: JSON.stringify({query}),
    },);
    const data = await res.json();
    const repos = data.data.user.repositories.nodes;
    return {"repositories": repos};
}