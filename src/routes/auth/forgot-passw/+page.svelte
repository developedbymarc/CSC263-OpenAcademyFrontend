<script lang="ts">
	import EmailForm from "#lib/pages/Auth/EmailForm.svelte";
	let { data } = $props();
</script>

<EmailForm {data} title="forgot password" submitLabel="Send reset link" />
