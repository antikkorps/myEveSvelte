<script>
    import { goto } from '$app/navigation';

    async function triggerError() {
        try {
            throw new Error('This is a test error');
        } catch (error) {
            console.error(error);
            goto('/error');
        }
    }
</script>

<main>
    <h1>Test Error Page</h1>
    <button on:click={triggerError}>Trigger Error</button>
</main>