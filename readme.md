# TypeScript Q&A

### How does TypeScript help in improving code quality and project maintainability?

Answer: Now days TypeScript was become a very popular and Developer chosen programming language for it performance and many feature that javascript doesn't have .Typescript help developer to improve there code quality and project maintainability via various ways like typescript type checking feature that was check any property type before run the code and it help developer to handle bug and error easily also it improve code readability,in a large scale project it's always hard to catch type of any property so here typescript improve project maintainability with her amazing features .


### Provide an example of using union and intersection types in TypeScript.

Answer: We often use union and intersection type on our project here is the breakdown of union and intersection type in typescript 

Union type ==> it's work like javascript or method|| Either this or that. but on typescript we use one single symbol | here is the example 
```bash
type User = 'normal User'
type AdminUser = 'Admin User'
type UnionTypeTest = User | AdminUser 
```
Intersection type ==> it's work like javascript and method && Both this and that have to be true .but on typescript we use one single symbol & here is the example 
```bash
type FrontendDeveloper ='frontend Developer'
type BackendDeveloper = 'Backend Developer'
type FullStackDeveloper = FrontendDeveloper & BackendDeveloper 
```
