<script>
	import { onMount } from 'svelte';
	import FullCalendar from 'svelte-fullcalendar';

	let options = { initialView: 'dayGridMonth', plugins: [] };

	onMount(async () => {
		options.plugins = [
				(await import('@fullcalendar/core/vdom')).default,
				(await import('@fullcalendar/daygrid')).default,
				(await import('@fullcalendar/timegrid')).default,
				(await import('@fullcalendar/interaction')).default,
		];
	});
</script>

<div>
	<div>Svelte Kit FullCalendar</div>
	<FullCalendar {options} />
</div>

