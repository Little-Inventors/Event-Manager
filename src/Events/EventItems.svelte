<script>
  export let title;
  export let description;
  export let address;
  export let contact;
  export let fees;
</script>

<div>
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
