import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    selector: 'user',
    template: `<button (click)="toggleHobbies()">{{showHobbies ? 'Hide': 'Show'}}</button>
                <div class="hobby" *ngIf="showHobbies">
                    <h2>Hobbies:</h2>
                    <ul>
                        <li *ngFor="let hobby of hobbies; let i = index">
                            {{hobby}} <button (click)="deleteHobby(i)">x</button>

                        </li>
                    </ul>
                    <form (submit)="addHobby(hobby.value)">
                        <label>New Hobby: </label>
                        <input type="text" #hobby />
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <hr />
                <h3>Posts</h3>
                <div *ngFor="let post of posts">
                    <h3>{{post.title}}</h3>
                    <p>{{post.body}}</p>
                </div>
                
                `,
    providers: [PostsService],            
    styles: [
        `h2 {
            color: darkred;
            }`  
    ]    

})

export class UserComponent {
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];
    constructor(private postsService: PostsService){
        this.hobbies = ["Piano", "Hacking"];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts=posts;
        });
    }
    toggleHobbies(){
        if(this.showHobbies == true)
            this.showHobbies = false;
        else
            this.showHobbies = true;
     
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
        hobby="";
    }
    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }
} 

interface Post{
    id: number;
    title: string;
    body: string;
}