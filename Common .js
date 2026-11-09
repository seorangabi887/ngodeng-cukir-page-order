const SB_URL='https://iaykluivjexwkekbfzea.supabase.co', SB_KEY='sb_publishable_Vib3ZorIk3Skci1E8mY-4Q_eMR_zZSD';
const sb=supabase.createClient(SB_URL,SB_KEY);
const WA='6285162862715', RECEIPT_W='58mm', BRAND='NGODENG CUKIR';
const $=s=>document.querySelector(s), rp=n=>'Rp'+(+n).toLocaleString('id-ID');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const EXT=['jpg','png','webp'];
// gambar: img/<nama-file>.jpg (lalu coba .png, .webp; kalau tidak ada, disembunyikan)
const imgErr=el=>{const i=+(el.dataset.i||0)+1;if(i<EXT.length){el.dataset.i=i;el.src='img/'+el.dataset.s+'.'+EXT[i]}else{el.onerror=null;el.style.display='none'}};
const img=s=>`<img src="img/${s}.jpg" data-s="${s}" alt="" onerror="imgErr(this)">`;
const lab=i=>i.name+(i.broth?' – '+i.broth:'');
const tomy=t=>esc(t).replace(/Tomyum/g,'<span class="tom">Tomyum</span>');
const group=a=>a.reduce((m,i)=>((m[i.who]=m[i.who]||[]).push(i),m),{});
const COL=['#fff1b8','#ffd9d9','#d6ecff','#e3f6d8','#ead9ff'];   // warna per kategori
