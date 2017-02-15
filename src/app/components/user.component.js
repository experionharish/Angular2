"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('../services/posts.service');
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.hobbies = ["Piano", "Hacking"];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
        hobby = "";
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "<button (click)=\"toggleHobbies()\">{{showHobbies ? 'Hide': 'Show'}}</button>\n                <div class=\"hobby\" *ngIf=\"showHobbies\">\n                    <h2>Hobbies:</h2>\n                    <ul>\n                        <li *ngFor=\"let hobby of hobbies; let i = index\">\n                            {{hobby}} <button (click)=\"deleteHobby(i)\">x</button>\n\n                        </li>\n                    </ul>\n                    <form (submit)=\"addHobby(hobby.value)\">\n                        <label>New Hobby: </label>\n                        <input type=\"text\" #hobby />\n                        <input type=\"submit\" value=\"Add\" />\n                    </form>\n                </div>\n                <hr />\n                <h3>Posts</h3>\n                <div *ngFor=\"let post of posts\">\n                    <h3>{{post.title}}</h3>\n                    <p>{{post.body}}</p>\n                </div>\n                \n                ",
            providers: [posts_service_1.PostsService],
            styles: [
                "h2 {\n            color: darkred;\n            }"
            ]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map