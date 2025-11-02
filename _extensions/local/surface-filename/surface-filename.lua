function Meta(meta)
  -----------------------------------------------------------------
  -- Extract the “post‑site” fragment
  -----------------------------------------------------------------
  local out_path = pandoc.path.split_extension(quarto.doc.output_file)               -- e.g. “…/_site/posts/foo.html”
  local marker   = "/_site"

  -- Find the first occurrence of the marker (plain‑string search)
  local _, finish = out_path:find(marker, 1, true)

  if finish then
    -- Everything after the trailing slash of the marker
    local post_site = out_path:sub(finish + 1)   -- e.g. "posts/foo.html"
    meta["site-post"] = post_site -- store as a plain string
  else
    -- No `/_site/` in the path → store an empty placeholder
    meta["site-post"] = ""
  end

  -- -- Find the first occurrence of the marker (plain‑string search)
  -- local _, finish = out_path:find("/", 1, true)
  -- if not meta.title then
  --   meta.title = meta["site-post"]
  -- end

  return meta
end