@GetMapping("admin/gallery/form_minor")
    public String galleryRequestList(Model model,
                                     @RequestParam Map<String, String> data) {
        // 카테고리명 불러오기용
        List<gall_cate2VO> cates = service.selectGalleryCates();
        // 갤러리 개설 신청 리스트 불러오기
        List<CreateVO> list = null;
        int category = 0;

        if (data.get("category") != null && !data.get("category").isEmpty()){
            category = Integer.parseInt(data.get("category"));
            int totalCount = service.searchByCategoryTotal(category);
            PagingDTO pagingDTO = new PagingUtil().getPagingDTO(data.get("pg"), totalCount);
            list = service.searchByCategory(Integer.parseInt(data.get("category")), pagingDTO.getStart());
            model.addAttribute("pagingDTO", pagingDTO);
        }else{
            int totalCount = service.galleryRequestTotal();
            PagingDTO pagingDTO = new PagingUtil().getPagingDTO(data.get("pg"), totalCount);
            list = service.galleryRequestList(pagingDTO.getStart());
            model.addAttribute("pagingDTO", pagingDTO);
        }

        model.addAttribute("list", list);
        model.addAttribute("cates", cates);
        model.addAttribute("selectedCategory", category);

        return "admin/gallery/form_minor";
    }