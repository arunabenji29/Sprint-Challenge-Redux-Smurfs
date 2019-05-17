
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions describe the events. They are usually called due to a user interaction in the UI with a button click or any kind of event. They feed into the reducers

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is where all the truthy is maintained. In redux there should be only one source of state living in the application side and Component state is anything which is required for UI.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux is synchronous. We need a middleware called redux-thunk to make redux asynchronous to allow things like promises. They provide the ability to handle asynchronous operations inside our action creators.

*********************************************************************************************************  

1.  Which `react-redux` method links up our `components` with our `redux store`?
1.  What is middleware?
1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?