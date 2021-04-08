# Modern React

### How to use this Repo:

There are two repos within this repo - `old-react` and `new-react` . Each of them represent a stage in the evolution of the React Library. 

There are also a number of branches in this repo numbered from 1, being the most rudimentary on up to the most complicated. Each branch has parallel code in each of the two sub-repos. Meaning that the apps will have identical behavior when running in the browser, but just leverage different methods to get there. 

So, go ahead and clone down this whole repo. Then `cd` down into one or the other sub-repos. 

When you run `npm start` it will spin up a local db as well as start the react app. 

If you are in the redux branch or above, I have included what's needed for the Redux dev tools, so feel free to check those out in the browser. The React dev tools will work for all of these branches. 

No tests have been written to this point, but feel free to write some and open a PR!

### The Presentation

(Click Here to see the Google Slides doc)[https://docs.google.com/presentation/d/1SAW81gxorpczvjO83vhFV5NHlVUmQfOMMUBPk6eJipo/edit#slide=id.g25f6af9dd6_0_0]

### The Information

Here's an outline of the presentation with sources cited to make it easy to dig deeper into the content of this lunch n learn:

## Brief

React has evolved these past couple years and we’re here to show you what you need to know. From class based components with independent lifecycle methods to functional components and custom hooks, as well as FLUX to redux to context, this lunch n learn will cover the basics of what you need to know to master Modern React. 

## Section 0 - Outline ⇒ 5 mins

#### What will be covered?

1. Basic background on React and the Flux pattern that Redux is based on - 5 mins
* What is React?
* What is Flux?
  + A pattern used to avoid prop-drilling by using global state that can be accessed from anywhere
  + Redux - 10 mins
  + I guess this isn’t “old style”, but it is, in a way, obsolete
* And Redux was basically a precursor to the context API
2. Old style React - 5 mins
* Back in my day! (ie Class Based Components)
* Lifecycle method - the main ones:
3. Quick example TODO app using old style React and Redux - 10 mins
* Walk through lifecycle methods with some console logs along the way to show what’s happening
* As well as step throughs of redux actions
  + Maybe use Redux devtools to help visualize what’s happening??
4. Intro to Modern React - 5 mins
* React version 16. 8 or newer
* Used together with old style
5. Hooks! - 10 mins
* The future is now old man
6. Context - 10 mins
* It’s built right in!
* Plus you can have different contexts for different parts of the application
* Levels if you will
7. Example TODO app using Hooks and Context - 15 mins
* Show where the old lifecycle methods would have been called
* Walk through how the different hooks can be used
* Show off a custom hook
* Use different levels of context (Probably a color theme and the todo’s)
* Show why context is so much better in functional components (it’s because there’s less nesting)
8. Bonus - Other tools - 5 mins
* React Devtools
  + An important tool
* Redux Devtools
  + See how state changes
* React Testing Library
  + It works in tandem with Jest and Enzyme, but focuses more on testing the dom directly to allow you to test the actual effect of user interaction
9. Questions

## Section 1 - Introduction ⇒ 10 mins

#### What is React - 5 mins

* React uses encapsulated components that manage their own state. These components can then be composed together to form complex UIs (“React GitHub Home”)
* React was created to allow developers to create large web applications that can change data, without reloading the page. (“What and Why React Js”)
* Basic Features:
  + JSX - JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code (“What Is JSX?”)
  + React Native - React-native is a mobile apps building framework using only Javascript. (“What and Why React Js”)
  + Single-way data flow - In React, a set of immutable values are passed to the components as properties in its HTML tags. The component cannot directly modify any properties but can pass a - callback function with which we can make modifications. (“What and Why React Js”)
    - This complete process is often referred to as:
      - “data down; actions up”
  + Virtual DOM
    - The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This - process is called reconciliation. (“Virtual DOM and Internals”)
    - React creates an in-memory data structure cache which computes the changes made and then updates the browser. This allows a special feature that enables the programmer to code as if the - whole page is rendered on each change whereas react library only renders components that actually change. (“What and Why React Js”)

#### What is FLUX - 5 mins

* Flux is a design pattern created by Facebook for building client-side web applications. Initially, it was more of a pattern rather than a formal framework, and did not require much additional code when originally introduced. (“Flux: An Application Architecture for React”)
* Flux helped solve the “Global State” problem. In other words, it was made to avoid having to constantly pass state objects around from component to component, making it both hard to keep track of what is what, as well as what the actual current state should be. 
* Although FLUX is designed to work well with React, it can be used with just about any frontend framework. 
* The Flux pattern consists of 4 main pieces:
  + Actions are simple objects with a type property and some data. For example, an action could be {“type”: “IncreaseCount”, “local_data”: {“delta”: 1}}
  + Stores contain the application’s state and logic. The best abstraction is to think of stores as managing a particular domain of the application. They aren’t the same as models in MVC since models usually try to model single objects, while stores in Flux can store anything
  + The Dispatcher acts as a central hub. The dispatcher processes actions (for example, user interactions) and invokes callbacks that the stores have registered with it. The dispatcher isn’t the same as controllers in the MVC pattern — usually the dispatcher does not have much logic inside it and you can reuse the same dispatcher across projects
    - The Dispatcher - Acts as a central hub, intaking actions and… bear with me here… dispatching the data associated with those actions. The dispatcher generally does not include app logic, but instead, acts more as a pass through of data. 
  + Views are controller-views, also very common in most GUI MVC patterns. They listen for changes from the stores and re-render themselves appropriately. Views can also add new actions to the dispatcher, for example, on user interactions. The views are usually coded in React, but it’s not necessary to use React with Flux (“Flux vs MVC Design Pattern”)
* Once it was determined that the Flux pattern was indeed helpful, Redux was introduced. 

#### What is REDUX - 5 mins

* Redux codified this pattern into an easy to use framework. (Phil)
* Briefly, Redux is a structured approach for storing and updating our application state. (Joreteg #)
* The main difference between Redux and Flux is that Redux is a Library and Flux is the pattern on which that library is based. (“The difference between Flux and Redux”) 
* Aside from that, Redux
  + Only has one single store, which means no independent dispatcher
  + Introduces Reducers: pure functions which accept the current state and a given action as arguments, and then output either the unmodified state or a new, edited copy of the state. (“Flux vs. Redux: A Comparison”)
* Hooks upended the pattern with context providers, which we’ll touch on in a bit. (Phil)
  + Indeed, REDUX may very well be just as out of date as class component. As long ago as 2016, Dan Abromov (one of the devs responsible for the creation of REDUX) proclaimed that “You Might Not Need Redux. ” (“You Might Not Need Redux”) and as recently as March 2020, stated "I don’t like Redux very much…” (“Dan Tweet”)

## Section 2 - Old Style React ⇒ 5 mins

#### What is “Classic REACT” as opposed to “Modern REACT” - 5 Mins

* Given that this lunch n learn is based on Modern React, we are not going to spend a ton of time talking about “old” react, but it’s important to at least touch on a few points in order to understand what has changed over time, and why the new features are an improvement over what once was. 
* Additionally, the React team has emphatically stated that there is no plan to deprecate the old class based React components. So while this approach may go out of style, it shouldn’t stop working. 
* So what is it anyway? React class based components are exactly that: a Javascript class that extends React. Component. With this comes all of the functionality of the React. Component, including the render method (which is how you draw JSX, React’s fancy version of HTML, to the dom), as well as the independent lifecycle methods. 
* In short, the react lifecycle of a component looks something like this:

* Class constructor (not technically React, but essential)
  + Set up the component with any initial state and or refs needed
* Render - first drawing of the html components
* componentDidMount - Now that we know we have the dom elements, we can update them as we see fit. For all intents and purposes, this will happen before the user sees anything. 
  + This method will often hold api requests that need to be made to grab data to fill the page
  + Or event listeners we want to add to the window/dom elements. We need to wait to be sure those elements exist, so adding them here will ensure that they have already been rendered to the dom
* Render - This is the first time the user will actually see the components we’re adding to the page
* componentDidUpdate - something changed, let’s make sure we update all the necessary things on the page. Be careful though! The components update a lot, and every change you make in here will, by definition, update the component. So, everything you put in here needs to have protections to make sure it doesn’t run repeatedly. 
* Render - Now componentDidUpdate and Render run on repeat until we finally reach the last (important) lifecycle method:
* componentWillUnmount - this is used for cleanup. One method you’ll see used here often is removeEventListener, so cleanup of any event listeners added in componentDidMount. 

## Section 3 - To the code! ⇒ 10 mins

* This is just an incredibly simple TODO app (wow what an innovative idea!)
* The idea here is just to represent some simple data flow. 
  + In the code on the GitHub repo, I’ve created a branches from the simplest possible implementation of this to the more complicated on that includes an API Request. 
  + In the interest of time though, we’re going to just dive into the most robust app so I can show you the full data flow
* Before we dive into the data flow, let’s just briefly take a look at the component structure
  + This is obviously and incredibly simple application so it’s hard to really see the true benefits of this state management system when there are only three components. 
  + But just trust me I guess... 
  + First, the entire app is wrapped by a “Provider” which is applied at the root level and is how all of the components can access the REDUX store
  + And then this app is split into three components, one main App component that is really just a wrapper and does not have access to Redux at all
    - Then a TodoForm component and a TodosList component
* We’ll start by fetching data in the componentDidMount method
* Then we can see how that data is added to the store by dispatching an action once the data has been retrieved from the DB
* Once it’s retrieved we can add a new TODO
  + The text input is what React refers to as a controlled component. This means that the text in the input is controlled and stored through the component state. 
* Once a TODO has been typed out, we can hit submit. 
  + This will dispatch an action to the store to add the TODO to the todos array being held in the store
* If we no longer want to do any of the things on the list or we’ve already completed it, we can remove the TODO from the list
  + This will dispatch another action to redux which will in turn update our store which then lets our component know what’s happening and updates the view component
* Quick wrapup on old react:
  + Class based components work perfectly well
  + They do everything we need them to do, and there are lots of creative ways to keep a nice separation of concerns
  + There’s definitely a bit of extra boilerplate here, but if you use a nice snippets library, you’ll probably barely even notice it
  + Additionally, REDUX is a great solution to state management
    - And there are some awesome REDUX DevTools that make it really easy to track changes in state throughout your application. 

## Section 4 - Intro to Modern React ⇒ 10 mins

* Before we jump into the specifics of a couple features that I am considering “Modern React” for the purposes of this lunch n learn, let’s try to assuage a few fears and then talk about why these features are awesome and why you should start using them right away:
* First, neither Redux nor Class based components are going anywhere. The React team has stated emphatically that they will continue to support Class based components and the Redux GitHub repo had a merge as recently as last week so that is also actively maintained as an open source project. 
* Second, both of these features give more of less the same advantage over the older approaches ⇒ less code. You can accomplish all of the same things you could with class-based components and Redux that you can with Functional Components that use hooks and the context API only using less code to accomplish it. 
  + Additionally I think these features both allow us to keep related code more siloed and give us the advantage of being able to better separate our concerns. More on this in a bit. 
* And lastly, these features were both added in React 16. 8 so they are ready to go out of the box. You can of course add them to any new React projects you start up, but you can also add them right on into any current ones you’ve got going as well. Neither of these features require any refactoring of any kind to introduce in small pieces if you’d like, and you do not need to add any dependencies as long as you’re using React 16. 8 or newer. 

## Section 5 - Hooks ⇒ 10 mins

* There is a zero percent chance that I am going to cover all the things you can do with hooks in a single lunch n learn, let alone a small ## section of said lunch n learn. What I’d like to do instead is give you a taste of what they can do, and hopefully introduce you to why they are useful so that you can go out and sink your teeth into them further. 
* So what makes hooks so great anyway aside from having to write less code?
  + With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. (“Hooks Intro”)
  + With Class Based components, you only get one of each life cycle method per component. So if you want to make an api request as well as add an event handler in componentDidMount for example, those two pieces of logic must live together. With hooks on the other hand, you can create multiple instances of the useEffect hook in order to keep related pieces of logic contained. 
  + No more trying to figure out what “this” is. If you’ve been using React since before the introduction of arrow functions, you may even remember having to bind all your functions to the class in the constructor method. Because using hooks allows you to only use functional components, you no longer need to access “this, ” nor do you need to bind anything to the component. 
  + Most commonly used default hooks:
    - useState: This hook basically allows us to create a property in the local state of the component. 
    - useReducer: An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (Just like our old friend Redux) (“Hooks API Reference”)
    - useRef: used in the same way React. CreateRef() is used in Class Based components. 
    - useEffect: This hook handles the lifecycle methods of the component. It’s basically componentDidMount, componentDidUpdate and componentWillUnmount all in one. 
    - useContext: The Context API itself will be covered more in the Context section, but this hook allows you to connect a component to any of the contexts it lives inside without entering “wrapper hell. ”
  + Custom Hooks
    - The true magic of hooks comes from the fact that you can create custom hooks and then reuse them throughout your application. If you’ve ever found yourself writing very similar logic in a bunch of different componentDidMounts or componentDidUpdate, hooks allow you to separate that logic out and use it across the application. Splitting this out of the component also makes for more reliable testing. 

## Section 6 - Context ⇒ 10 mins

* Context provides a way to pass data through the component tree without having to pass props down manually at every level. (“Context”)
  + Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. (“Context”)
* Context works more or less the same as REDUX except with a less opinionated interface and it allows you to have multiple “stores” in an application. 
  + This can be especially useful for very large applications with different state logic for different parts of the app. For example if you have an e-commerce site where you want to track user settings everywhere, browsing history on the products page and a list of selected items in the shopping cart. 
  + If you were using Redux for this, you’d likely have to store all of these sets of state logic in one single Redux Store. 
  + With Context, we can apply one provider over everything that holds just the user settings. Then a separate provider for the products page as well as a third for the shopping cart. 
  + This makes it much simpler to keep track of what state belongs where
* Context has actually been around for quite some time, but using it in class based components can become a bear as you need to include a Provider Wrapper for each context than a component needs access to which can result in wrapper hell
* One quick caveat: Context, like redux connect, can cut down on code reusability. Once you’ve connected a component to it’s context or to the redux store, you cannot use it anywhere that it does not connect to that context. 
  + In the case of Redux, because there is generally just one store for the entire app, you do not need to worry about whether or not a component can/should have access to the app-wide state. Although you probably wouldn’t want components in a shared UI library to be connected to a Redux store. 
  + For Context however, because the best use of the context api is to split the app into multiple contexts, we cannot always rely on components having what they need. 
  + This really shouldn’t hold anyone back from using context, but it is definitely an argument for splitting up data minded components from ui focused ones that are more likely to be more widely used between multiple contexts. 
* Context, like Redux before it, helps us avoid prop drilling - the practice of passing props down a long chain of components so that two components on opposite sides of of the tree can share state
* Now we can access that state from anywhere below the provider without needing to pass that data through the parent components. 

## Section 7 - To the code! ⇒ 10 mins

* So, let’s see this all in action
* Once again, we’ve got an incredibly simple application with just three components
* Additionally, I’m only using one single context here just so you can see it working. In a larger app, as I’ve mentioned, you may want to use multiple contexts to track different aspects of state
* Let’s start with the component structure again. It’s more or less the same, although the components are a bit smaller because we are now using functional components rather than class based
  + In this version, instead of wrapping the app at the root level with the redux provider, I’m doing it at the app component level. If you wanted, you could do this at the root level, or you could place it lower down the component tree. That’s one of the key differences between Context and Redux
  + Additionally, you can see that in both the TodoList and TodoForm components, we are connecting to the context with just the single line useContext hook
* Now the data flow:
  + We start here by fetching the data in the useEffect hook in the TodoList component. 
    - The second argument of the useEffect hook is a dependency array, or a list of all the items that, if changed, should trigger the code to run in this hook. 
    - Passing this an empty array is, for all intents and purposes, the same as calling componentDidMount
    - Passing this an array with one item in it is like calling componentDidMount and componentDidUpdate with an if block inside of it to see if prevProps or prevState are different than the current props or state. 
    - Lastly, if you return a callback function here, that will run on cleanup. This is the same as the code that you place in componentWillUnmount
    - And because you can have multiple instances of the useEffect hook in a single component, we are able to keep all of the mounting, updating and unmounting logic flow in one place for each state/prop dependency. 
* Inside the useEffect hook, we call the setTodos() method that is called in the TodosState context
  + This fetches the data from our API and sets it to state
  + This is similar to the thunks we saw in the old style react app
* Once the todos are set in the context, our TodosList will update and we will render all of the todos to the page
  + If we have completed one of them, we can click the (X) button and that will trigger the removeTodo action that lives in our TodosState context
* If we want to add a Todo, we can handle that in the TodoForm component. 
  + This is also a controlled component that leverages the useState hook to store a property on the local state. 
  + Then, because this is also hooked into the TodosState context, we can call addTodo() when we’ve typed in our new Todo item

## Bonus Round!

#### Checkout these techs:

* (Redux Dev Tools)[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en]
* (React Dev Tools)[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en]
* (React Testing Library)[https://testing-library.com/docs/react-testing-library/intro/]

## Wrapup:

* Use a functional component somewhere random and see if you can sneak it through code review
* Context is a really great way to add theming to your app. If you want to toggle between light and dark themes but don’t feel like that logic should live in your redux state, silo it into a context so that it does not have to live with the business logic. 
* These are slightly newer technologies, and while they are both fully production ready, the tools that help us use them are still being developed. That being said, I did find some really nice context dev tools that work just fine and give a lot of the essential functionality that the redux devtools do
