# TF1 Carousel Exercise

This app is a carousel written from scratch in React for TF1.

## How I designed the `Carousel` API ?

The first question I asked myself was : what would the `Carousel` API look like ? As this component is intended to be used across a variety of applications.

So I decided to make it simple and reusable. In fact the `Carousel` component is only responsible of the navigation feature. It renders his children plainly and display navigation buttons to make them slide.

```jsx
<Carousel>
  <Element />
  <Element />
  <Element />
</Carousel>
```

This way, the `Carousel` component is easy to use, and you can give it any custom component as children.

## What can be improved ?

As requested, I collected errors and ideas for improvement that could be used to improve the exercise.

#### Some images are no longer available

Some image urls are no longer available which causes display problems. We have to fix the urls and think of a way to handle these errors in the UI.

#### Exercise specifications are vague

I know it's only a test and it needs to be done quickly. But in a real-world situation the specifications would not be detailed enough. This is problematic because the developer has to infer certain behaviors and it can lead to a disagreement with the product team. This is true for :

- The navigation of the carousel (where does the next and back button take you ?)
- The loading case (when the data aren't fetch yet)
- How responsive is managed
- What happen if we click on a program ?
- What happen if we click on the "+" button ?

#### We need a `slug` property for routing

This component is designed to help the user choose a program. So when a user clicks on a program he expects to be redirected to the details page of the latter. But looking at the GraphQL schema, no properties seem to be assigned to this routing task.

- `id` can be used but it is not SEO friendly at all
- `name` is not formatted to be used as a URL
