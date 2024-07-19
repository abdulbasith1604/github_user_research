function getUserId(){
    var originName = document.getElementById("text").value;
    console.log(originName);
    fetch("https://api.github.com/users/" + originName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            var avatar = '<img src="' + data.avatar_url + '" alt="user_avatar">';
            var id = '<p>ID: ' + data.id + '</p>';
            
            fetch(data.repos_url)
                .then((result) => result.json())
                .then((repos) => {
                    console.log(repos);
                    var repoList = '<h3>Repositories:</h3><ul>';
                    repos.forEach((repo) => {
                        repoList += '<li><a href="' + repo.html_url + '" target="_blank">' + repo.name + '</a></li>';
                    });
                    repoList += '</ul>';
                    document.getElementById("result").innerHTML = avatar + id + repoList;
                });
        });
}
