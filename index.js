require('dotenv').config()
const express=require('express')
const app=express();
const port=3000;
const githubData={
    "login": "KaiLegend56",
    "id": 161408143,
    "node_id": "U_kgDOCZ7kjw",
    "avatar_url": "https://avatars.githubusercontent.com/u/161408143?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/KaiLegend56",
    "html_url": "https://github.com/KaiLegend56",
    "followers_url": "https://api.github.com/users/KaiLegend56/followers",
    "following_url": "https://api.github.com/users/KaiLegend56/following{/other_user}",
    "gists_url": "https://api.github.com/users/KaiLegend56/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/KaiLegend56/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/KaiLegend56/subscriptions",
    "organizations_url": "https://api.github.com/users/KaiLegend56/orgs",
    "repos_url": "https://api.github.com/users/KaiLegend56/repos",
    "events_url": "https://api.github.com/users/KaiLegend56/events{/privacy}",
    "received_events_url": "https://api.github.com/users/KaiLegend56/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Omar Bin Nasir",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2024-02-27T03:26:42Z",
    "updated_at": "2024-06-30T13:08:37Z"
  };
app.get('/github',(req,res)=>{
    res.json(githubData);   
})
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/twitter',(req,res)=>{
    res.send('hello')
})
app.get('/login',(req,res)=>{
    res.send('<button>hello world nigger</button>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening at port ${process.env.PORT} `);
})
