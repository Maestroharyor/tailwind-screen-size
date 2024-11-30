<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Position, Theme, Breakpoint } from '../types';
	import { detectTailwind } from '../utils';

	// Props
	export let className = '';
	export let position: Position = 'bottom-right';
	export let theme: Theme = 'dark';
	export let show: boolean | undefined = undefined;
	export let containerClassName = '';
	export let textClassName = '';
	export let dividerClassName = '';
	export let breakpointClassName = '';
	export let breakpoints: Breakpoint[] | undefined = undefined;
	export let showDefaultBreakpoints = true;
	export let hideNoTailwindCSSWarning = false;

	// State
	let currentBreakpoint = '';
	let width = 0;
	let isTailwindDetected = true;
	let mounted = false;

	const positionClasses: Record<Position, string> = {
		'top-left': 'top-5 left-5',
		'top-right': 'top-5 right-5',
		'bottom-left': 'bottom-5 left-5',
		'bottom-right': 'bottom-5 right-5',
		'top-center': 'top-5 left-1/2 -translate-x-1/2',
		'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2'
	};

	const themeClasses: Record<
		Theme,
		{ container: string; text: string; divider: string; breakpoint: string }
	> = {
		dark: {
			container: 'bg-gray-900/90 text-white',
			text: 'text-white',
			divider: 'bg-gray-700',
			breakpoint: 'text-gray-400'
		},
		light: {
			container: 'bg-white/90 text-gray-900',
			text: 'text-gray-900',
			divider: 'bg-gray-200',
			breakpoint: 'text-gray-600'
		},
		glass: {
			container: 'bg-white/30 backdrop-blur-lg text-gray-900',
			text: 'text-gray-900',
			divider: 'bg-gray-300/50',
			breakpoint: 'text-gray-600'
		},
		minimal: {
			container: 'bg-white/10 text-gray-800',
			text: 'text-gray-800',
			divider: 'bg-gray-300',
			breakpoint: 'text-gray-500'
		},
		slate: {
			container: 'bg-slate-100/90 text-slate-900',
			text: 'text-slate-900',
			divider: 'bg-slate-300',
			breakpoint: 'text-slate-600'
		},
		gray: {
			container: 'bg-gray-100/90 text-gray-900',
			text: 'text-gray-900',
			divider: 'bg-gray-300',
			breakpoint: 'text-gray-600'
		},
		zinc: {
			container: 'bg-zinc-100/90 text-zinc-900',
			text: 'text-zinc-900',
			divider: 'bg-zinc-300',
			breakpoint: 'text-zinc-600'
		},
		neutral: {
			container: 'bg-neutral-100/90 text-neutral-900',
			text: 'text-neutral-900',
			divider: 'bg-neutral-300',
			breakpoint: 'text-neutral-600'
		},
		stone: {
			container: 'bg-stone-100/90 text-stone-900',
			text: 'text-stone-900',
			divider: 'bg-stone-300',
			breakpoint: 'text-stone-600'
		},
		red: {
			container: 'bg-red-100/90 text-red-900',
			text: 'text-red-900',
			divider: 'bg-red-300',
			breakpoint: 'text-red-600'
		},
		orange: {
			container: 'bg-orange-100/90 text-orange-900',
			text: 'text-orange-900',
			divider: 'bg-orange-300',
			breakpoint: 'text-orange-600'
		},
		amber: {
			container: 'bg-amber-100/90 text-amber-900',
			text: 'text-amber-900',
			divider: 'bg-amber-300',
			breakpoint: 'text-amber-600'
		},
		yellow: {
			container: 'bg-yellow-100/90 text-yellow-900',
			text: 'text-yellow-900',
			divider: 'bg-yellow-300',
			breakpoint: 'text-yellow-600'
		},
		lime: {
			container: 'bg-lime-100/90 text-lime-900',
			text: 'text-lime-900',
			divider: 'bg-lime-300',
			breakpoint: 'text-lime-600'
		},
		green: {
			container: 'bg-green-100/90 text-green-900',
			text: 'text-green-900',
			divider: 'bg-green-300',
			breakpoint: 'text-green-600'
		},
		emerald: {
			container: 'bg-emerald-100/90 text-emerald-900',
			text: 'text-emerald-900',
			divider: 'bg-emerald-300',
			breakpoint: 'text-emerald-600'
		},
		teal: {
			container: 'bg-teal-100/90 text-teal-900',
			text: 'text-teal-900',
			divider: 'bg-teal-300',
			breakpoint: 'text-teal-600'
		},
		cyan: {
			container: 'bg-cyan-100/90 text-cyan-900',
			text: 'text-cyan-900',
			divider: 'bg-cyan-300',
			breakpoint: 'text-cyan-600'
		},
		sky: {
			container: 'bg-sky-100/90 text-sky-900',
			text: 'text-sky-900',
			divider: 'bg-sky-300',
			breakpoint: 'text-sky-600'
		},
		blue: {
			container: 'bg-blue-100/90 text-blue-900',
			text: 'text-blue-900',
			divider: 'bg-blue-300',
			breakpoint: 'text-blue-600'
		},
		indigo: {
			container: 'bg-indigo-100/90 text-indigo-900',
			text: 'text-indigo-900',
			divider: 'bg-indigo-300',
			breakpoint: 'text-indigo-600'
		},
		violet: {
			container: 'bg-violet-100/90 text-violet-900',
			text: 'text-violet-900',
			divider: 'bg-violet-300',
			breakpoint: 'text-violet-600'
		},
		purple: {
			container: 'bg-purple-100/90 text-purple-900',
			text: 'text-purple-900',
			divider: 'bg-purple-300',
			breakpoint: 'text-purple-600'
		},
		fuchsia: {
			container: 'bg-fuchsia-100/90 text-fuchsia-900',
			text: 'text-fuchsia-900',
			divider: 'bg-fuchsia-300',
			breakpoint: 'text-fuchsia-600'
		},
		pink: {
			container: 'bg-pink-100/90 text-pink-900',
			text: 'text-pink-900',
			divider: 'bg-pink-300',
			breakpoint: 'text-pink-600'
		},
		rose: {
			container: 'bg-rose-100/90 text-rose-900',
			text: 'text-rose-900',
			divider: 'bg-rose-300',
			breakpoint: 'text-rose-600'
		}
	};

	const defaultBreakpoints: Breakpoint[] = [
		{ screenTitle: 'XS', minWidth: 0 },
		{ screenTitle: 'SM', minWidth: 640 },
		{ screenTitle: 'MD', minWidth: 768 },
		{ screenTitle: 'LG', minWidth: 1024 },
		{ screenTitle: 'XL', minWidth: 1280 },
		{ screenTitle: '2XL', minWidth: 1536 }
	];

	const baseClasses = {
		container:
			'fixed flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200',
		divider: 'h-4 w-px'
	};

	function isDevelopment() {
		return process.env.NODE_ENV === 'development';
	}

	function getCurrentBreakpoint(width: number, breakpointList: Breakpoint[]) {
		const sortedBreakpoints = [...breakpointList].sort((a, b) => b.minWidth - a.minWidth);
		return sortedBreakpoints.find((breakpoint) => width >= breakpoint.minWidth)?.screenTitle || '';
	}

	function handleResize() {
		width = window.innerWidth;
		currentBreakpoint = getCurrentBreakpoint(width, breakpoints || defaultBreakpoints);
	}

	// Derived values
	$: shouldShow = show ?? isDevelopment();
	$: activeBreakpoints = breakpoints || (showDefaultBreakpoints ? defaultBreakpoints : []);
	$: containerClassNames = twMerge(
		baseClasses.container,
		themeClasses[theme].container,
		positionClasses[position],
		containerClassName,
		className
	);
	$: textClassNames = twMerge(themeClasses[theme].text, textClassName);
	$: dividerClassNames = twMerge(
		baseClasses.divider,
		themeClasses[theme].divider,
		dividerClassName
	);
	$: breakpointClassNames = twMerge(themeClasses[theme].breakpoint, breakpointClassName);

	// Lifecycle
	onMount(() => {
		mounted = true;
		isTailwindDetected = detectTailwind();
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

{#if mounted && shouldShow}
	{#if !isTailwindDetected && !hideNoTailwindCSSWarning}
		<div class="fixed bottom-5 left-5 text-xs text-red-500">Tailwind CSS not detected</div>
	{/if}
	<div class={containerClassNames}>
		<span class={textClassNames}>{width}px</span>
		<div class={dividerClassNames}></div>
		<span class={breakpointClassNames}>{currentBreakpoint}</span>
	</div>
{/if}
