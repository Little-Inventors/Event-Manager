<script>
  export let title;
  export let description;
  export let address;
  export let contact;
  export let fees;
</script>

<div class="event-item">
  <header>
    <h1>{title}</h1>
    <p>{description}</p>
  </header>
  <div class="content">
    <p>{address}</p>
    <p>{contact}</p>
    <p>{fees}</p>
  </div>
</div>

<style>
  .event-item {
    width: 50%;
    display: inline-block;
    box-shadow:  0 2px 8px rgba(0,0,0, 0.26);
    border-radius: 5px;
    margin: 1rem;
  }

  header, .content{
    padding: 1rem;
  }

  p{
    font-size: 1.25rem;
    margin: 0;
  }

  .content{
    text-align: right;
  }
</style>