<script>
	import { Calendar } from '@fullcalendar/core';
	import interactionPlugin from '@fullcalendar/interaction';
	import { onMount } from 'svelte';

	let calendarEl;

	onMount(function() {
		let calendar = new Calendar(calendarEl, {
			plugins: [ interactionPlugin ],
			droppable: true
		});

		calendar.render();
	});
</script>

<div>
	<div>Svelte Kit FullCalendar</div>
	<div bind={calendarEl}/>
</div>

