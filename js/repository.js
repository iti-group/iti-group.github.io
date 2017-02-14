"use strict"
var SETTINGS = {
	github: { page: "https://iti-group.github.io/", repo: "https://github.com/iti-group/" }
};
window.addEventListener("load", function() {
	class Repository {
		constructor() {
			this.el = document.getElementById("repositories");
			this.titles = [];
			this.inpSearch = document.getElementsByClassName("repo-search")[0];
			this.init();
		}
		init() {
			for(var i = 0; i < this.el.children.length) {
				var repo = this.el.children[i];
				var repoName = repo.getAttribute("data-repo");
				repo.classList.add("repository");
				this.titles.push(repo.children[0].innerHTML.toLowerCase());
				repo.children[0].classList.add("repo-name");
				var page_btn = document.createElement("a");
				page_btn.className = "page_btn";
				page_btn.setAttribute("href", SETTINGS.github.page + repoName);
				page_btn.innerHTML = "<span class=\"page-icon\"></span><span>page</span>";
				var repo_btn = document.createElement("a");
				repo_btn.className = "repo_btn";
				repo_btn.setAttribute("href", SETTINGS.github.repo + repoName);
				repo_btn.innerHTML = "<span class=\"git-icon\"></span><span>repo</span>";
				repo.insertBefore(page_btn, repo.children[1]);
				repo.insertBefore(repo_btn, repo.children[2]);
			}
			this.inpSearch.addEventListener("keyup", this.search.bind(this));
		}
		search() {
			var word = this.inpSearch.value.toLowerCase();
			if(word) {
				for(var i = 0; i < this.titles.length; i++) {
					if(this.titles[i].indexOf(word) == -1) this.el.children[i].style.display = "none";
					else this.el.children[i].style.display = "block";
				}
			} else {
				for(var i = 0; i < this.el.children.length) this.el.children[i].style.display = "block";
			}
		}

	}
	var repository = new Repository();
})