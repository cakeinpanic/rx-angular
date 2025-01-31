# Refactoring to a reactive component setup

In this tutorial we will learn how to refactor a component written in imperative style to a fully reactive implementation.

To set up the project locally run following steps:

- `git clone https://github.com/rx-angular/rx-angular.git rx-angular`
- `cd rx-angular`
- `npm install` or `yarn install`
- `npm start demos` or `yarn nx serve demos`

you can find the working application in `http://localhost:4200/rx-angular/demos`.

The source can be found under `apps/demos/src/app/features/tutorials`.

The example shows a simple component setup of a parent container and a child component displaying the data.

In the child component an expansion-panel is used to display the data. this panel can be opened and closed by clicking on the title.
The open/close state of the expansion-panel is forwarded to the parent component as output binding.

As input binding the parent container maintains a number over an input box. Every change of the number gets forwarded to the child component over an input binding.

In the child component there is a background process running. the input value from the parent gets used to start an interval and refresh the list data every [n] milliseconds.
Furthermore, there is a refresh button. A click on it also refreshes the list data.

Topics we will discuss are:
- [Setup a reactive state, selections and, UI interactions][1-setup]
- [handle @Inputs reactively][2-input-bindings]
- [handle @Output reactively][3-output-bindings]
- [Create a global state and attach it to components][4-global-state]
- [Handing Side Effects reactively][5-side-effects]
<!-- - [Presenter Pattern][6-presenter-pattern] -->

you can also visit the full solution after applying all of the above steps in [here](https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/solution)

# How to use this tutorial

Each chapter has three files:

- `.start.component.ts`: showing the initial state of the file
- `.solution.component.ts` demonstrating the state of the file after applying all the changes discussed in that chapter
- `.container.component.ts`: here we always use the `.start.component.ts` in the template, change it to the solution one and you can see the result of the solution component

> You can compare the `.start.component.ts` and `.solution.component.ts` against each other to see what changes is made.

> in VSCode to compare two files against each other: <br> <br>
> 1- open the first file (in our case the `.start.component.ts`) <br>
> 2- press Ctrl(Cmd)+shift+P then choose `File: Compare Active file with ...` <br>
> 3- choose the second file (in our case the `.solution.component.ts`)

[1-setup]: https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/1-setup
[2-input-bindings]: https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/2-input-bindings
[3-output-bindings]: https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/3-output-bindings
[4-global-state]: https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/4-global-state
[5-side-effects]: https://github.com/rx-angular/rx-angular/tree/master/apps/demos/src/app/features/tutorials/basics/5-side-effects
