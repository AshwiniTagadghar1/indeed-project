package com.indeed.server.dto;

import lombok.Data;

@Data
public class PostDTO {
    private String profile;

    private String type;
    private String experience;

    private String description;
    private String technology[];
    private String salary;
}
