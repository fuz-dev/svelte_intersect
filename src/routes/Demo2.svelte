<script lang="ts">
	import {intersect} from '$lib/intersect';

	// TODO think about this module being in the library

	let container_el: HTMLElement, particle_el: HTMLElement;
</script>

<div class="items box">
	<div class="container" bind:this={container_el}>
		<div
			class="particle"
			bind:this={particle_el}
			use:intersect={{
				cb: (intersecting) => {
					console.log(`intersecting`, intersecting);
					container_el.classList.toggle('intersecting', intersecting);
				},
				options: {root: container_el},
			}}
		/>
	</div>
</div>

<style>
	.items {
		position: relative;
		width: 100%;
	}
	.container {
		width: 300px;
		height: 50px;
		background-color: hsla(
			var(--container_hue, var(--hue_6)),
			50%,
			80%,
			var(--container_alpha, 0.35)
		);
	}
	.container:global(.intersecting) {
		--container_hue: var(--hue_3);
	}
	.particle {
		width: 32px;
		height: 32px;
		background-color: hsla(var(--hue_7), 50%, 80%, 0.75);
	}
</style>
