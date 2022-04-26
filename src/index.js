import Dashboard from "./views/dashboard/Dashboard.js";
import Posts from "./views/Posts.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    
    const routes = [
        { path: '/', view: Dashboard },
        { path: '/posts', view: Posts },
        { path: '/settings', view: () => console.log('Viewing Settings') },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route, 
            isMatch: location.pathname === route.path
        }
    });

    const match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

    if (!match) { // Go to default page
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    
    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHtml();
    await view.executeViewScript();
};

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () =>{
    document.body.addEventListener('click', e => {
        if (e.target.matches('[gy-route]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});