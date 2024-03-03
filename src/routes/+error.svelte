<script>
    import { navigate } from 'svelte-routing';

</script>

<main>
    <h1>Oups, something went wrong</h1>
    <button><a href="/">Go back to Home</a></button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    button {
        padding: 8px 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>