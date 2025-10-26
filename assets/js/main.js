document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');
  const out = document.getElementById('searchResult');

  const mapping = {
    'docs':'Open the `docs/` folder for architecture and API design.',
    'infra':'Look under `infra/` for terraform, k8s & cloud scripts.',
    'deploy':'See `infra/cloud` and `scripts/deploy.sh` for deploys.',
    'ip':'Check `src/microservices/ipManagement` for IP pools and rotation.',
    'monitor':'Monitoring lives in `monitoring/` (prometheus/grafana).',
    'ci':'CI/CD pipelines in `ci-cd/` (github-actions, Jenkinsfile).',
    'prxy':'prxy — network gateway overview; one-page UI loaded.'
  };

  function doSearch(){
    const q = (input.value||'').trim().toLowerCase();
    if(!q){ out.textContent = 'Enter a keyword like "docs", "infra", "ip".'; return }
    for(const k of Object.keys(mapping)){
      if(q.includes(k)){
        out.textContent = mapping[k];
        return;
      }
    }
    out.textContent = 'No direct match — try "docs", "infra", "ip", "monitor".';
  }

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') doSearch() });
});
