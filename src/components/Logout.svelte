<script>
    import { logout } from '../services/auth';

    function handleLogout() {
        logout();
        // Add any additional logic after logout if needed
    }
</script>

<button class="btn btn-active btn-ghost" on:click={handleLogout}>Logout</button>