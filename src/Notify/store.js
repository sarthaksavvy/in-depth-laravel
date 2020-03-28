import { writable } from 'svelte/store';

export const message = writable(null);
export const type = writable("");
export const visibleFor = writable(5000);
export const pos = writable('center');
export const anim = writable({x: 200,duration:1000});

let time

export const notify = (msg,ty,count,position,fly) => {
	if(typeof msg === 'object'){
		ty = msg.type
		count = msg.time
		position = msg.position
		fly = msg.fly
		msg = msg.message
	}

	message.update(n => n = msg)
	
	if(ty) type.update(n => n = ty)
	
	if(count) visibleFor.update(n => n = count)

	if(position) pos.update(n => n = position)

	if(fly) anim.update(n => n = fly)

	visibleFor.subscribe(value => time = value);
	setTimeout(() => message.update(n => n = null), time)
}