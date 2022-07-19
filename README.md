# Carousel

This app is a carousel written from scratch in React.

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
